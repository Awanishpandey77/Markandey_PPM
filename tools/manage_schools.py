#!/usr/bin/env python3
"""Local-only school profile editor and static page generator."""
import json, re, subprocess, sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/'school-data'/'schools.json'

class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(ROOT),**kwargs)
    def do_GET(self):
        if self.path=='/': self.send_response(302); self.send_header('Location','/tools/admin.html'); self.end_headers(); return
        if self.path=='/api/schools':
            raw=DATA.read_bytes(); self.send_response(200); self.send_header('Content-Type','application/json; charset=utf-8'); self.send_header('Content-Length',str(len(raw))); self.end_headers(); self.wfile.write(raw); return
        super().do_GET()
    def do_POST(self):
        if self.path!='/api/save': self.send_error(404); return
        try:
            size=int(self.headers.get('Content-Length','0'))
            if size>5_000_000: raise ValueError('Data is too large')
            data=json.loads(self.rfile.read(size))
            if not isinstance(data.get('schools'),list): raise ValueError('Expected a schools list')
            seen=set()
            for s in data['schools']:
                slug=s.get('slug','')
                if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',slug) or slug in seen: raise ValueError(f'Invalid or duplicate school link: {slug}')
                seen.add(slug)
            DATA.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
            subprocess.run([sys.executable,str(ROOT/'tools'/'build_schools.py')],check=True,cwd=ROOT)
            out=json.dumps({'count':len(data['schools'])}).encode(); self.send_response(200); self.send_header('Content-Type','application/json'); self.send_header('Content-Length',str(len(out))); self.end_headers(); self.wfile.write(out)
        except Exception as e:
            out=json.dumps({'error':str(e)}).encode(); self.send_response(400); self.send_header('Content-Type','application/json'); self.send_header('Content-Length',str(len(out))); self.end_headers(); self.wfile.write(out)

if __name__=='__main__':
    print('Local school editor: http://127.0.0.1:8765/ (Ctrl+C to stop)')
    ThreadingHTTPServer(('127.0.0.1',8765),Handler).serve_forever()

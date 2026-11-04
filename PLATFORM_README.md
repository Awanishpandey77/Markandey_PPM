# Markandey Pustak Mandir · Multi-school website starter

This static, file-based platform starts with six sample school profiles around Khajani and nearby Gorakhpur. Every school receives a distinct link under `/s/<school-slug>/`, while `/schools/` is the public directory. School pages share the same mobile-responsive template and include classes, editable sample book lists, uniform details and pictures, school life, notices, gallery, bilingual English/Hindi copy, and contact links.

## Owner editing (no database)

1. Open Terminal in the downloaded project folder.
2. Run `python3 tools/manage_schools.py`.
3. Open `http://127.0.0.1:8765/` in a browser. This editor listens only on this computer.
4. Edit the school JSON, use **Add a sample school** for another profile, and choose **Save & build pages**. The editor writes `school-data/schools.json`, then regenerates `/s/<slug>/` and `/schools/`.
5. In GitHub Desktop, review the changed files, commit, and push to publish.

Photos can be replaced with approved school images. Store them in `assets/schools/`, then set `heroPhoto`, `uniform.weekdayImage`, `uniform.sportsImage`, and `photos` to paths such as `assets/schools/khajani-campus.jpg`. Existing sample photos are illustrative remote images. Confirm all school names, addresses, fees, notices, uniform details, book titles, prices and phone permissions with the school before publishing.

The data file is part of the public static website. Enter public school information only; do not add student or family records. This starter has no accounts, server database, cloud storage, or remote admin service. Keep edits in the project checkout and use GitHub Desktop to publish.

## Main business homepage

The platform adds `/schools/` and `/s/` routes without changing the existing Markandey Pustak Mandir homepage.

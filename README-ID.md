# Repositori Website ITNC
Selamat datang di repositori resmi **Website ITNC (Informatics & Technology Club)**.  
Di sinilah kami membangun dan memelihara situs web resmi ITNC.

## Struktur Repositori
- `src/` → berisi file css, js, dan lainnya.
- `docs/` submodule:
    - `docs/` → dokumentasi, panduan, dan tutorial.
    - `resources/` → aset bersama, pustaka, dan referensi.

## Pilihan Bahasa
* [Inggris](https://github.com/ITNCNitra/itncnitra.github.io/blob/main/README.md)
* [Indonesia](https://github.com/ITNCNitra/itncnitra.github.io/blob/main/README-ID.md)

<br>

# Memulai
### Unduh dan Instal Visual Studio Code dan Git
- Unduh dan instal VSCODE ([tautan](https://code.visualstudio.com/))
- Unduh dan instal Git ([Git](https://git-scm.com/downloads))

### Konfigurasi Identitas Git
```bash
git config --global user.name "Nama Anda"
git config --global user.email "anda@example.com"
```

### Menyiapkan Folder Proyek
1. Di desktop, buat folder baru bernama **"ITNC (bebas)"**  
2. Buka foldernya lalu di kolom path, ketik **cmd** dan tekan Enter  
3. Setelah Command Prompt terbuka, klon repositori dan buka di Visual Studio Code:
    ```bash
    git clone https://github.com/ITNCNitra/itncnitra.github.io.git
    cd itncnitra.github.io
    code .
    ```
4. Buka terminal baru di Visual Studio Code melalui menu terminal di atas
5. **Opsional (saat ini):** Tarik file `docs/` submodule:
    ```
    git submodule update --remote --rebase
    ```
    **Catatan:** jalankan kembali perintah ini untuk memperbarui submodule `docs/`
6. Instal dependensi:
    ```
    npm install
    ```
7. Jalankan/build Tailwind:
    ```
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch      # jalankan saat pengembangan
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --minify (sebelum menambahkan output.css dan commit)
    ```
8. **Opsional:** sinkronkan file lokal dengan remote (GitHub):
    ```
    git fetch origin
    git pull
    ```
    **Catatan:** jalankan ulang perintah untuk menarik commit terbaru,  
    Anda juga bisa membaca lebih lanjut tentang perintah Git di sini [itncnitra.github.io\docs\docs\git.md](https://github.com/ITNCNitra/ITNC/blob/main/docs/git.md)

<br>

## 🤝 Kontribusi
Anggota **ITNC** yang ingin berkontribusi langsung dapat meminta akses untuk ditambahkan sebagai **kolaborator** di repositori ini.  
Cukup hubungi salah satu maintainer atau buka issue dengan judul “Access Request.”

Untuk kontributor **di luar organisasi**, Anda dipersilakan untuk **fork** repositori ini dan membuka **Pull Request (PR)** dengan perbaikan Anda. Pastikan perubahan Anda jelas dan mengikuti gaya commit kami (misalnya, `feat:`, `fix:`, `docs:`).

### Langkah dasar untuk kontributor eksternal:
1. Fork repositori ini  
2. Buat branch baru untuk perubahan Anda  
3. Commit dengan pesan yang jelas  
4. Push ke fork Anda  
5. Buka Pull Request  

Kami akan meninjau PR Anda dan menggabungkannya jika sesuai dengan tujuan proyek.

## Langkah dasar untuk kontributor internal:
### Membuat Branch Baru
```bash
git checkout -b <nama-branch>
```
Kerjakan kode Anda di branch `<nama-branch>` baru tersebut.  
Lakukan commit secara berkala selama pengembangan.

### Commit dan Push Perubahan
```bash
git add <file>
git commit -m "<pesan-commit>"
git push -u origin <nama-branch>
```
Ketika proyek sudah stabil, buka Pull Request untuk digabungkan ke `main`.

<br>

## Panduan Kontribusi
1. Selalu buat branch baru untuk proyek atau fitur Anda (`git checkout -b nama-proyek` atau `nama-fitur`).  
2. Selalu lakukan build sebelum menambahkan output.css, proses deployment akan gagal tanpanya. 
3. Tulis pesan commit yang jelas dan deskriptif.  
4. Push branch Anda dan buka Pull Request ketika siap digabung ke `main`.

# 📘 Tổng quan Workspace

Workspace của bạn bao gồm ba dự án chính:

1. **`movie-reviews`** – backend Node.js/MongoDB xử lý review phim.
2. **`TDapp-mongodb`** – ứng dụng mẫu với client/server sử dụng MongoDB.
3. **`IE213_phatTrienWeb/ThucHanh`** – nơi lưu trữ các bài Lab môn IE213 (phát triển ứng dụng web).

File README dưới đây tập trung vào phần `ThucHanh` nhưng cũng giới thiệu chung các dự án phụ để dễ định hướng.

---

# 🎓 Thực hành IE213 – Phát triển ứng dụng Web

**Sinh viên:** Huỳnh Thành Dân  
**MSSV:** 23520220  
**Lớp:** _[Điền mã lớp của bạn]_  
**Môn học:** IE213.Q21 – Phát triển Ứng dụng Web

## 📂 Cấu trúc thư mục

```
IE213_phatTrienWeb/
├─ movie-reviews/           # dự án backend review phim
│  ├─ backend/
│  │  ├─ index.js
│  │  ├─ server.js
│  │  ├─ package.json
│  │  ├─ api/
│  │  │  ├─ movies.controller.js
│  │  │  └─ movies.route.js
│  │  └─ dao/
│  │     └─ moviesDAO.js
├─ ThucHanh/                 # bài lab môn học
│  ├─ README.md              # file này
│  ├─ Lab1/
│  │  └─ Lab1.mongodb.js
│  └─ …                      # các lab tiếp theo sẽ được thêm vào
```

---

## 📝 Danh sách bài Lab

| Lab | Nội dung chính                                              |
|-----|-------------------------------------------------------------|
| 01  | Làm quen với MongoDB – CRUD cơ bản và Aggregation           |
| 02  | _Mô tả ngắn khi làm tới_                                    |
| 03  | …                                                           |
| 04  | …                                                           |
| 05  | …                                                           |
| 06  | …                                                           |

> ⚠️ Cập nhật bảng mỗi khi hoàn thành Lab mới.

---

## ⚙️ Hướng dẫn sử dụng & cài đặt

### Yêu cầu môi trường

- **Node.js** (>=14.x)
- **MongoDB** (local hoặc Atlas)

### Cách cài đặt

1. **Cài Node.js & MongoDB** theo hướng dẫn chính thức.
2. Mở terminal, di chuyển vào thư mục dự án (ví dụ `movie-reviews/backend`) rồi chạy:
   ```bash
   npm install
   ```
3. Khởi động MongoDB nếu chạy local: `mongod --dbpath <đường dẫn dữ liệu>`
4. Chạy server:
   ```bash
   node server.js
   ```
5. Thực hiện các file lab với:
   ```bash
   node ThucHanh/Lab1/Lab1.mongodb.js
   ```

### Cách chạy từng lab

Mỗi bài Lab là một script JS tương tác với MongoDB. Mở file và đọc phần comment để biết các câu lệnh cần chạy.

---

## ✅ Trình trạng hoàn thành

- **Lab 1:** Hoàn thành 10/10 câu hỏi
- **Lab 2:** _Đang thực hiện…_
- …
- **Tổng trạng thái:** Cập nhật theo tiến độ

---

## 🤖 Sử dụng AI

Nếu có dùng hỗ trợ từ công cụ AI, phải ghi rõ:

- **Công cụ:** Gemini 3 Flash
- **Mục đích:** 
  - Giải thích lỗi cú pháp Git
  - Gợi ý cấu trúc thư mục
  - Giải thích toán tử `$group` trong MongoDB

> 📌 Luôn minh bạch việc sử dụng AI trong báo cáo học tập.

---

## 💡 Ghi chú chung

- Các dự án phụ (`movie-reviews`, `TDapp-mongodb`) là tham khảo, có thể dùng để thực hành thêm.
- Tổ chức mã nguồn, comment rõ ràng và tuân thủ nguyên tắc REST khi xây dựng API.
- Cập nhật README này khi thêm bài Lab mới hoặc thay đổi cấu trúc.

---

_Chúc bạn học tốt và hoàn thành đầy đủ các bài Lab!_ ✅
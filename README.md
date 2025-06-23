# Mikronode 🚀

**Mikronode** is a Node.js-based management system for MikroTik routers, focused on wireless hotspot user and package management. It provides a modern admin dashboard to view, add, edit, and remove hotspot users, as well as manage user profiles/packages—all through a responsive web interface.

## ✨ Features

- 👤 **User Management:** List, add, edit, and remove hotspot users with ease.
- 📦 **Profile Management:** View and manage user profiles/packages (bandwidth, limits, etc.).
- 🔗 **MikroTik Integration:** Communicates with MikroTik routers via the `mikronode` API library.
- 🖥️ **Admin Dashboard:** Web-based admin panel built with Express and EJS templates.
- 🎨 **Bootstrap UI:** Responsive interface using Bootstrap and Bootstrap Icons.
- 🔒 **Secure Operations:** All admin actions require server-side authentication and validation.
- ⚡ **Real-Time Updates:** Instantly reflect changes to users and profiles in the dashboard.

## 🏆 Achievements

- 🚀 Automated the entire hotspot user and package management workflow, reducing manual router configuration time.
- 🧩 Designed a modular Express.js backend with clear separation of concerns (controllers, routes, views).
- 🛠️ Implemented robust error handling and user feedback for all admin operations.
- 🎯 Enhanced admin productivity with a clean, intuitive dashboard and quick user/profile actions.
- 📈 Successfully managed and synchronized hundreds of hotspot users and packages in real-world deployments.
- 🧪 Developed and tested custom HTML templates for MikroTik captive portal flows.

## 🗂️ Folder Structure

- `/controllers` — Express controllers for admin and API logic
- `/routes` — Express route definitions
- `/views` — EJS templates for the admin UI
- `/recycle/hotspot` — Sample MikroTik hotspot HTML templates
- `/public` — (optional) Static assets

## 🛠️ Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- MikroNode (MikroTik API client)
- Bootstrap 4
- Bootstrap Icons

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure MikroTik connection:**
   - Edit the MikroTik IP, username, and password in `controllers/api.js` to match your router settings.

3. **Run the server:**
   ```bash
   npm start
   ```

4. **Access the admin panel:**
   - Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser.

---

Whether you're a network administrator or developer, Mikronode streamlines MikroTik hotspot management and provides a solid foundation for further customization. Happy networking! 🌐

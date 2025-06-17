# Mikronode

**Mikronode** is a Node.js-based management system for MikroTik routers, focused on wireless hotspot user and package management. It provides an admin dashboard to view, add, edit, and remove hotspot users, as well as manage user profiles/packages.

## Features

- **User Management:** List, add, edit, and remove hotspot users.
- **Profile Management:** View and manage user profiles/packages.
- **MikroTik Integration:** Uses the `mikronode` library to communicate with MikroTik routers via their API.
- **Admin Dashboard:** Web-based admin panel built with Express and EJS templates.
- **Bootstrap UI:** Responsive interface using Bootstrap and Bootstrap Icons.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- MikroNode (MikroTik API client)
- Bootstrap 4

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Configure MikroTik connection:**
   - Edit the MikroTik IP, username, and password in `controllers/api.js` to match your router settings.

3. **Run the server:**
   ```
   npm start
   ```

4. **Access the admin panel:**
   - Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser.

## Folder Structure

- `/controllers` — Express controllers for admin and API logic
- `/routes` — Express route definitions
- `/views` — EJS templates for the admin UI
- `/recycle/hotspot` — Sample MikroTik hotspot HTML templates
- `/public` — (optional) Static assets

## License

ISC

---

**Note:** This project is intended for educational and internal use. Secure your MikroTik credentials and restrict access to the admin panel in production

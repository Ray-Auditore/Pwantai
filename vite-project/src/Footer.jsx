export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-green-700 text-white p-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="text-sm">
          Copyright &copy; 2023 Wisata Pantai Drini. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoup-8OJdqHKuMYgOsyuOAm19jU90aiqw_g&s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBON4hE6Pbwueh18WxNM9iStyLJt4mGoiQBQ&s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

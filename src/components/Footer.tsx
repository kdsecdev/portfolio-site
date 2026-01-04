
export const Footer = () => {
  return (
    <footer id="footer-contact" className="py-12 px-4 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-display mb-6">
          Ready to build something secure and scalable?
        </h2>

        <p className="text-text-primary text-center text-xs mt-12">
          &copy; {new Date().getFullYear()} Caleb (DEV:KD). All rights reserved.
        </p>
      </div>
    </footer>
  );
};

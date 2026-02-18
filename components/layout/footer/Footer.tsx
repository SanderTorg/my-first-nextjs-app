function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-black">
      <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Dorgy Codes. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;

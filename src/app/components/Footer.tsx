function Footer() {
  return (
    <footer className="flex flex-row justify-between relative top-16 pb-4">
      <p>
        © Copyright {new Date().getFullYear()} by {process.env.DEVELOPERS_NAME}.
        All rights reserved.
      </p>
      <address>
        You can contact author at
        <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.
        <br />
        If you see any bugs, please
        <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br />
        You may also want to visit us:
        <br />
        Mozilla Foundation
        <br />
        331 E Evelyn Ave
        <br />
        Mountain View, CA 94041
        <br />
        USA
      </address>
    </footer>
  );
}

export default Footer;

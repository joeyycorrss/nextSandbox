import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
    <Link href='http://www.johncavaseno.com'>
      <a style={linkStyle}>John Cavaseno</a>
    </Link>
  </div>
);

export default Header;
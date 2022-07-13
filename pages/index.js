import Link from 'next/link';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home! </h1>
      <ul>
        <li>
          <Link href="/forms">Forms</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

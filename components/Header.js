export default function Header() {
  return (
    <header>
      <h1>Where in the World?</h1>
      <style jsx>{`
        header {
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          display: flex;
          justify-content: flex-start;
          padding: 15px;
          align-items: center;
        }

        h1 {
          margin: 0;
        }
      `}</style>
    </header>
  )
}

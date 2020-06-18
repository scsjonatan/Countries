import Head from 'next/head'
import Link from 'next/link'
import { replaceText } from '../utils'

export default function Home({ countries }) {
  return (
    <div className="container">
      <Head>
        <title>Countries</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        {
          countries.map(country => (
            Card(country)
          ))
        }
      </main>
      <style jsx>{`
          * {
            font-family: 'Nunito Sans', sans-serif;
          }

          main {
            text-align: center;
          }
      `}</style>
    </div>
  )
}


function Card(country) {
  return (
      <div className="card" key={country.name + country.population}>
        <Link href={`/${replaceText(country.name)}`}>
          <div className="flag" />
        </Link>
        <div className="data">
          <Link href={`/${replaceText(country.name)}`}>
            <p>{country.name}</p>
          </Link>
          <ul>
            <li><span>Population: </span>{country.population}</li>
            <li><span>Region: </span>{country.region}</li>
            <li><span>Capital: </span>{country.capital}</li>
          </ul>
        </div>
        <style jsx>{`
          .card {
            border-radius: 8px;
            width: 300px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            font-size: 14px;
            height: 400px;
            margin: 30px 10px;
            background: white;
            display: inline-block;
            text-align: left;
          }

          .flag {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
            background-image: url(${country.flag});
            cursor: pointer;
          }

          img {
            width: 100%;
          }

          .data {
            padding: 15px;
          }

          ul {
            padding: 10px 0;
            margin: 0;
            list-style: none;
          }

          li {
            font-size: 18px;
            margin-bottom: 5px;
          }

          span {
            font-weight: 600;
          }

          p {
            font-weight: 800;
            font-size: 22px;
            margin: 0;
            text-decoration: none;
            cursor: pointer;
          }

        `}</style>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries = await res.json()
  return {
    props: {
      countries,
    },
  }
}

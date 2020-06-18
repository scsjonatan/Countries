import Head from 'next/head'
import { replaceText } from '../utils'

export default function Country({ country }) {
  const {
    flag,
    name
  } = country[0]

  return (
    <div className="country">
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      { Flag(flag) }
      <div className="container">
        { Data(country[0]) }
      </div>
      <style jsx>{`
          * {
            font-family: 'Nunito Sans', sans-serif;
          }

          .country {
            text-align: center;
          }

          .container {
            display: flex;
            max-width: 700px;
            margin: auto;
            justify-content: space-between;
          }
      `}</style>
    </div>
  )
}

function Flag(flag) {
  return (
    <div>
      <div className="flag" />
      <style jsx>{`
          .flag {
            background-image: url(${flag});
            background-size: cover;
            background-position: center;
            width: 700px;
            height: 500px;
            margin: auto;
          }
      `}</style>
    </div>
  )
}

function Data(country) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages
  } = country
  return (
    <div className="data">
      <h1>{name}</h1>
      <ul>
        <li><span>Native name: </span>{nativeName}</li>
        <li><span>Population: </span>{population}</li>
        <li><span>Region: </span>{region}</li>
        <li><span>Sub region: </span>{subregion}</li>
        <li><span>Capital: </span>{capital}</li>
        <li><span>Currencies: </span> { currencies.map(currency => (<p key={currency.code}>{currency.name}</p>))}</li>
        <li><span>Languages: </span>{ languages.map(language => (<p key={language.name}>{language.name}</p>))}</li>
      </ul>
      <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            font-size: 18px;
            text-align: left;
            max-width: 400px;
          }

          span {
            font-weight: 600;
          }

          p {
            display: inline;
            margin-left: 5px;
          }
      `}</style>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${params.country}`)
  const country = await res.json()
  return { props: { country } }
}

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries = await res.json()
  const paths = countries.map((country) => ({
    params: { country: replaceText(country.name) },
  }))

  return { paths, fallback: false }
}

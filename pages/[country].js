import { replaceText } from '../utils'

export default function Country({ country }) {
  const {
    name
  } = country[0]
  return (
    <div>
      { Flag() }
      <div>
        { Data() }
        { Borders() }
      </div>
      <h1>{name}</h1>
    </div>
  )
}

function Flag() {
  return (
    <div>
      Flag
    </div>
  )
}

function Data() {
  return (
    <div>
      Data
    </div>
  )
}

function Borders() {
  return (
    <div>
      Borders
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

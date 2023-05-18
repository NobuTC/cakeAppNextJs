export default function About({ params }) {
  console.log(params);
  return <h1>this is blog {params.id}</h1>;
}

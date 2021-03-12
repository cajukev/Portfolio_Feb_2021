import Home from '../../components/pageComponents/home'

const Lang = (props) => {
  return (
    <div>
      <Home {...props}/>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = [
    {
      params: {
        lang: 'fr'
      }
    },
    {
      params: {
        lang: 'en'
      }
    }
  ]
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  return {
    props: {
      
    }
  }
}
export default Lang;

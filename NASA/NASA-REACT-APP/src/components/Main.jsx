export default function Main (props){
  const {data} = props
  return (
    <div className="imgConatainer">
    <img src={data.hdurl} alt={data.title || 'bg-img'} class="bgImage"/>
    </div>
  )

  

}
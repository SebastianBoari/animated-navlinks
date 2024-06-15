import Navbar from '../components/Navbar'

const Products = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Navbar />
      <div>Productos</div>
      <p>
        Based on Sam Selikoff`s tutorial,{' '}
        <a
          href="https://www.youtube.com/watch?v=kep_Iaxuzy0&t=35s"
          target="_blanc"
          className="text-[#e78b21] hover:text-[#b67f41] font-semibold"
        >
          see original
        </a>
        .
      </p>
    </div>
  )
}

export default Products

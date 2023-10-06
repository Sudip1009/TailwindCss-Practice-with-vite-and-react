import { categories } from "../data/Data"
function Category() {
  return (
    <div className="max-w-[1640px] px-4 py-12">
        <h1 className='text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>Top Rated Menu Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
        {categories.map((item,id)=>(
            <div key={id} className="bg-gray-100 rounded-xl flex justify-between items-center p-4">
                <h2 className="font-bold sm:txt-xl">{item.name}</h2>
                <img className="w-20" src={item.image} alt={item.name} />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Category
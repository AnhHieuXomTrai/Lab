import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
function List() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/tours');
        setTours(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
  }, []);
  const handleDelete = async id => {
    if (window.confirm('Ban chac chan muon xoa')) {
      try {
        await axios.delete('http://localhost:3000/tours/' + id);
        setTours(tours.filter(tour => tour.id !== id));
        toast.success('Delete successfull');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                destination
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                duration
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                price
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                image
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                available
              </th>

              <th className="px-4 py-2 border border-gray-300 text-left">
                Handle
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map(tour => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.destination}
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  {tour.duration}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.price}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={tour.image} alt={tour.name} width={300} />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.available}
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(tour.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit/${tour.id}`}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;

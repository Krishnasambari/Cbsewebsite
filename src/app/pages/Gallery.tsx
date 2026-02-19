import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE0OTM4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1674573228894-3d8c97e9a394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc3MTQ5Mzg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1602114324271-08ea0e9f7a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGluJTIwbGlicmFyeSUyMHJlYWRpbmd8ZW58MXx8fHwxNzcxNDkzODYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1764943630631-b63aadf86e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTQzNDUxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Photo Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Glimpses of life at Sri Chaitanya Techno School - where every day is an opportunity to learn and grow.
        </p>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry gutter="24px">
          {images.map((image, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src={image}
                style={{width: "100%", display: "block"}}
                alt={`Gallery image ${i + 1}`}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

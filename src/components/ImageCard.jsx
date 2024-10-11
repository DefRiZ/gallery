export default function ImageCard({ title, imageUrl }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <p className="text-center text-lg font-semibold p-4">{title}</p>
    </div>
  );
}

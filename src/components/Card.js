export default function Card({ title, description }) {
    return (
        <div className="flex flex-col rounded-lg items-center p-3 bg-neutral prose max-w-none h-screen">
            <h3 className="m-0">{title}</h3>
            <p>{description}</p>
        </div>
    );
}
export default function Button({ text, href }) {
  return (
    <a
      href={href}
      className="inline-block rounded-lg bg-blue-900 px-6 py-3 text-white
                 transition hover:scale-105 hover:bg-blue-900 font-semibold"
    >
      {text}
    </a>
  );
}
export default function TabButton({ children, onSelect }) {
  function handleClick() {
    //console.log('hello World');
    onSelect(); // Call the passed function
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

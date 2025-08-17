export default function TabButton({ children, onSelect, isSeleted }) {
  function handleClick() {
    //console.log('hello World');
    onSelect(); // Call the passed function
  }

  return (
    <li>
      <button className={isSeleted? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}

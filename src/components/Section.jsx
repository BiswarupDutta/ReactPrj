export default function Section({ title, children, ...props }) {
  return (
    //...props is used to get id className and other elements presentin the section tag
    
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

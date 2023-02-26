const Banner = ({ className, items, title }) => {
  return (
    <div className={className}>
      <div>{title} </div>
      {items.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  )
}

export default Banner

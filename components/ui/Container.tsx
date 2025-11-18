export default function Container({ children, className = '' }: any){
  return <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
}

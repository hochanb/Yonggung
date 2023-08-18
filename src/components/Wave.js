export function WaveTop({color='white', className=''}){
  return(

    <svg xmlns="http://www.w3.org/2000/svg" width="390" height="17" viewBox="0 0 390 17" fill="none"
    className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M390 16.4609L383.5 15.5321C377 14.6033 364 12.7458 351 12.7458C338 12.7458 325 14.6033 312 15.7563C299 16.9092 286 17.3576 273 16.685C260 15.9805 247 14.155 234 13.4504C221 12.7458 208 13.2262 195 14.155C182 15.0517 169 16.4609 156 16.4608C143 16.4608 130 15.0517 117 14.3791C104 13.6746 91 13.6746 78 12.7458C65 11.8491 52 9.99153 39 9.28695C26 8.6144 13 9.06276 6.50003 9.28695L7.91715e-07 9.54316L1.80494e-06 5.36604e-07L6.50003 1.0045e-06C13 1.47239e-06 26 2.40818e-06 39 3.34397e-06C52 4.27975e-06 65 5.21554e-06 78 6.15133e-06C91 7.08712e-06 104 8.0229e-06 117 8.95869e-06C130 9.89448e-06 143 1.08303e-05 156 1.17661e-05C169 1.27018e-05 182 1.36376e-05 195 1.45734e-05C208 1.55092e-05 221 1.6445e-05 234 1.73808e-05C247 1.83166e-05 260 1.92524e-05 273 2.01881e-05C286 2.11239e-05 299 2.20597e-05 312 2.29955e-05C325 2.39313e-05 338 2.48671e-05 351 2.58029e-05C364 2.67387e-05 377 2.76744e-05 383.5 2.81423e-05L390 2.86102e-05L390 16.4609Z" fill={color}/>
  </svg>
  
  )
};

export function WaveBottom(props, {className=''}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="390" height="41" viewBox="0 0 390 41" fill="none" 
      className={className}
    >
  <path d="M35 31.5002C22.6 31.1002 6.5 37.0002 0 40.0002V1H390V25.0004C368.5 20.5004 319.5 29.5004 312 31.5002C304.5 33.5 278 34.0004 270 34.5004C262 35.0004 244.5 40.0002 226 40.0002C207.5 40.0002 182 31.5002 164.5 31.5002C147 31.5002 122 38.5004 101.5 40.0002C81 41.5 50.5 32.0002 35 31.5002Z" fill="white" fillOpacity="0.3" stroke="white"/>
</svg>
  )
}
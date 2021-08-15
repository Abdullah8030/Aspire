export const Industries = (props) => {
  return (
    <div id='industries' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Industries </h2>
       
        </div>
        <div className='rowForIndustries'>
          {props.data
            ? props.data.map((d, i) => { return( 
                <div key={`${d.name}-${i}`} className='col-md-4' id="moveUp">
                  {' '}
                  <i className={d.icon}></i>
                  <div className='industries-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              )})
            : 'loading'}
        </div>
      </div>
    </div>
  )
}



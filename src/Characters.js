import React from 'react'
import { Link } from 'react-router-dom';

const statusClass = (status) => {
    if(status.toLowerCase() === "alive"){
        return 'alive';
    }
    else if(status.toLowerCase() === "presumed dead"){
        return 'dead';
    }
    else{
        return 'deceased';
    }
}

const Characters = ({data}) => {
    return (
        <section className="characters">
            {data.map((character)=>{
                const {char_id, name, img, birthday, occupation, status} = character;
                return (
                    <Link to={`/characters/${char_id}/${name.split(" ")[0]}-${name.split(" ")[1]}`}>
                      <div key={char_id} className="characterOuter">
                          <div className={`status ${statusClass(status)}`} >{status}</div>
                          <div className="character">
                              <div className="img">
                                  <img src={img} alt="" />
                              </div>
                              <div className="info">
                                  <h3>{name}</h3>
                                  <h5>{birthday}</h5>
                                  <h5>{occupation.map((occ)=>{
                                      return `${occ} | `;
                                  })}</h5>
                              </div>
                          </div>
                      </div>
                    </Link>
                );
            })}
        </section>
    )
}

export default Characters

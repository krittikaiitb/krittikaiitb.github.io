export interface PersonProps{
    name: string,
    post: string,
    img?: string,
}


export default function PersonCard({name, post, img="/img/team/default_profile.png"}: PersonProps){
    return(
        <div className="col-md-4 mb-4">
        <div className="card border-0 shadow bg-light">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title mb-0">{name}</h5>
            <p className="card-text">{post}</p>
          </div>
        </div>
      </div>
    )
}
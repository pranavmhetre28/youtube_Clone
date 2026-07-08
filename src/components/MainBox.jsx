import React, { useEffect, useState } from 'react'
import Style from '../css/MainBox.module.css'
import { CloudCog } from 'lucide-react';

const MainBox = () => {

  let [state, setState] = useState();
 
  async function apiData() {
    const params = {
      part: "snippet, statistics",
      chart: "mostPopular",
      maxResults: 9,
      regionCode: "IN",
      key:import.meta.env.VITE_YOUTUBE_API_KEY
    }
    let fetchData = fetch(`https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(params)}`)

    let res = await fetchData;
    let data = await res.json();
    setState(data.items)
  }
  console.log(state)

  useEffect(() => {
    apiData()
  }, []);

  return (
    <main className={Style.main}> 
      {
        state?.map((data) => {
          return (<>
            <article className={Style.article}>
              <div>
                <img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
              </div>
              <div>
                <h2>{ data.snippet.title.slice(0,50)}</h2>
              </div>
              <div>
                <h3>{ data.snippet.channelTitle}</h3>
              </div>

            </article>
          </>)
        })
     }

    </main>
  )
}

export default MainBox





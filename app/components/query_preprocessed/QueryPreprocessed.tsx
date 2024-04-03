import { Parallax, Background } from 'react-parallax'
import Map from '../map/Map'
import "react-datepicker"
import MyDatePicker from './MyDatePicker'
import Slider from '../structures/DiscreteSlider'
import DiscreteSlider from '../structures/DiscreteSlider'


export default function QueryPreprocessed(){
    return(
        <>
        <Parallax className='scooter-hub' strength={400}>
        <div className=' grid grid-cols-2 h-screen bg-gradient-to-b from-0% from-slate-400/80 via-transparent to-transparent'>
            <div className=' flex flex-col justify-center items-center self-center justify-self-center w-full h-full bg-gradient-to-r from-80% from-slate-400/80 to-transparent'>
                <h2 className=' absolute flex justify-self-center top-10 text-white font-bold text-shadow-custom text-4xl'>Query our pre-processed data...</h2>
                <button className=' button-6'>UPDATE MAP</button>
                <br/><br/><br/>
                <DiscreteSlider></DiscreteSlider>
                <br/>
                <MyDatePicker></MyDatePicker>
                <br></br>
                <label className=' text-white'>Select a date between 11/18/2020 - 12/13/2020</label>
            </div>
             <div className=' w-3/4 h-4/6 bg-white mx-auto mt-16 rounded-lg'>
                <Map name="query" sample="./PredictionData.geojson"></Map>
            </div>
        </div>
            <Background className=''>
                <div className='content'>
                    <img
                    src="https://www.tripsavvy.com/thmb/JxfvhfiP7GYuORAf14AuhykDNto=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicago-river-tourboat-downtown-chicago-skyscrapers-1139456318-b5e51582061b4c03a2ede6616ccf32da.jpg"
                    className=' min-h-screen min-w-fit '
                    alt='scooter'>
                    </img>
                </div>
            </Background>
        </Parallax>
        </>
    )
}
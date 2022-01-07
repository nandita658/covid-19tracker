import Legend from '../Components/Legend';
import Map from '../Components/Map';
import legendItems from '../entities/LegendItems';

const CovidMap = (props) => {
    const legendItemsInReverse = [...legendItems].reverse();

    return (
        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
            {props.countries.length === 0 ? <p>Loading...</p> : (
                <div>
                    <Map countries={props.countries} />
                    <Legend legendItems={legendItemsInReverse} />
                </div>
            )}
        </div>
    )
}

export default CovidMap;

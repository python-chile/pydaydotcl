import Image from "next/image";
import {
  LuCoffee, LuPartyPopper, LuHandshake, LuMic,
  LuWrench, LuMapPin, LuLinkedin
} from "react-icons/lu";

export default function TalksTable({talks}) {
  const ICONS = {
    recepcion: <LuHandshake size={16} className="mr-1" />,
    break: <LuCoffee size={16} className="mr-1" />,
    cierre: <LuPartyPopper size={16} className="mr-1" />,
    charla: <LuMic size={16} className="mr-1" />,
    taller: <LuWrench size={16} className="mr-1" />
  }
  const rooms = [];
  const times = [];
  let rows = [];
  for (let talk of talks){
    const isGeneral = ['recepcion', 'break', 'cierre'].includes(talk.type);
    if (!isGeneral && !rooms.includes(talk.room)){
      rooms.push(talk.room);
    }
    const [start, end] = talk.time.split(' - ');
    if (!times.includes(start)){
      times.push(start);
    }
    if (!times.includes(end)){
      times.push(end);
    }
  }
  times.sort();
  rows = times.map(() => rooms.map(() => null));
  rows.pop();
  for (let talk of talks){
    const [start, end] = talk.time.split(' - ');
    const slot0 = times.indexOf(start);
    const isGeneral = ['recepcion', 'break', 'cierre'].includes(talk.type);
    if (isGeneral){
      rows[slot0] = talk;
    } else {
      const slots = times.indexOf(end) - slot0;
      const room = rooms.indexOf(talk.room);
      rows[slot0][room] = [slots, talk];
      for(let i=1;i<slots;i++){
        rows[slot0 + i][room] = 1;
      }
    }
  }
  return (<table className="talks-table">
    <thead>
      <tr>
        <th>Hora</th>
        {rooms.map(room => <th key={room}>{room}</th>)}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, ix0) => {
        let sessions = [];
        if(!Array.isArray(row)){
          sessions = <td colSpan={rooms.length}>
            <div style={{display: 'inline-block'}}>
              <div className={`px-2 py-1 rounded-full text-xs flex items-center font-semibold`}>
                {ICONS[row.type]}{row.title}
              </div>
            </div>
          </td>;
        } else {
          sessions = row.map((subrow, ix1) => {
            if (!Array.isArray(subrow)){
              if(subrow)
                return null;
              return <td key={ix1} style={{background: 'gray'}}></td>;
            }
            return (<td key={ix1} rowSpan={subrow[0]}>
              <div className="text-xs"><b>{subrow[1].title}</b></div>
              <div className="flex" style={{justifyContent: "center"}}>
                {subrow[1].speakers.map((speaker, ix2) =>
                  <div key={`${ix1}-${ix2}`} className="text-xs" style={{textAlign: 'center'}}>
                    <div
                      className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-purple-700 flex-shrink-0"
                      style={{display: 'inline-block'}}
                    >
                      <Image
                        src={speaker.image}
                        height={64}
                        width={64}
                        alt={speaker.name}/>
                    </div>
                    <p>{speaker.name}</p>
                  </div>)}
              </div>
            </td>)
          });
        }
        return (<tr key={ix0}>
          <td>{times[ix0]} - {times[ix0+1]}</td>
          {sessions}
        </tr>)
      })}
    </tbody>
  </table>);
}
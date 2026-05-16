import { SUBJECTS } from '../../data/subjects';

interface Props {
  room: string;
  onRoomChange: (room: string) => void;
}

export default function RoomSelector({ room, onRoomChange }: Props) {
  return (
    <div className="room-selector">
      <button
        className={`room-tab${room === 'global' ? ' room-tab--active' : ''}`}
        onClick={() => onRoomChange('global')}
      >
        Global
      </button>
      {SUBJECTS.map((s) => (
        <button
          key={s.id}
          className={`room-tab${room === s.slug ? ' room-tab--active' : ''}`}
          onClick={() => onRoomChange(s.slug)}
        >
          {s.name}
        </button>
      ))}
    </div>
  );
}

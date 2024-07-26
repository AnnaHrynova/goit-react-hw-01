import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    const friendStatus = clsx(css.status, isOnline ? css.online : css.offline);

    return (
        <div className={css.friendCard}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={friendStatus}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}

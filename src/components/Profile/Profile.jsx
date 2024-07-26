import css from "./Profile.module.css"

export default function Profile({
    data: {avatar, username, tag, location, stats}
}) {
    const keys = Object.keys(stats);
    const camelCaseStatName = str => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className={css.container}>
            <img className={css.img} src={avatar} alt="icon"  />
            <p className={css.username}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
            <ul className={css.stats}>
                {keys.map((key, index) => (
                    <li className={css.statItem} key={index}>
                        <span>{camelCaseStatName(key)}</span>
                        <span className={css.statValue}>{stats[key]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
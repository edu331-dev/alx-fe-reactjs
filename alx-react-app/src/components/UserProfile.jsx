function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '5px',
        maxWidth: '400px'
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>
        {props.name}
      </h2>

      <p style={{ marginBottom: '5px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>

      <p style={{ color: '#555' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;

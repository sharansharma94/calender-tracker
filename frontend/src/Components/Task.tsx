export default function Task() {
  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input name="desc" />
      </div>
      <div>
        <button> Submit</button>
      </div>
    </div>
  );
}

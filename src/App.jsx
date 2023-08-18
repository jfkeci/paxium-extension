import ViewHolder from './components/Core/ViewHolder/ViewHolder';
import DefaultSidebar from './components/Core/DefaultSidebar/DefaultSidebar';

function App() {
  return (
    <div>
      <DefaultSidebar />

      <div className="pl-40">
        <ViewHolder />
      </div>
    </div>
  );
}

export default App;


import './index.css';
import Header from './components/header.tsx';
import Table from './components/table/table.tsx';
import Footer from './components/footer.tsx'

function App() {
  return (
    <div className="App min-h-screen w-full">
      <Header></Header>
      <main className='bg-fascom-black'>

        <div className='py-12 lg:py-24'>
          <h2 className='text-center text-3xl md:text-4xl lg:text-5xl text-fascom-yellow'>Delivery Table</h2>
          <p className='text-center my-8 mx-2 md:mx-8 text-sm md:text-base lg:text-lg text-white [&>b]:text-fascom-yellow'>Check out <b>our customer's orders</b> in the following table. Here you can check the <b>delivery address</b>, the <b>estimated delivery date</b> and their <b>status</b>.</p>
        </div>
       
        <Table></Table>
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

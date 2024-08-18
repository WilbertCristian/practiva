import Logo from './_components/Logo';
import Description from "./_components/Description";
import OpenLink from '../components/OpenLink';
import Contador from "./_components/Contador";
import FilterableProductTable from './_components/FilterableProductTable';

const Default = () => {
    return (
        <>
            <header className="App-header">
               
                <Description />
                <Logo />
                <br />
                <FilterableProductTable />
            </header>
        </>
    );
};

export default Default;
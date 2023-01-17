import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import response from '../../response';
import { Link } from "react-router-dom";
import Search from '../search/Search';
import SearchIcon from '@mui/icons-material/Search';
import { DescriptionOutlined, ImageOutlined, LocalOfferOutlined, MoreVertOutlined, RoomOutlined } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    //live api call
    const { data } = useGoogleSearch(term)
    // console.log(data)
    // const data = response;
    // console.log(data)

    return (
        <div className='searchPage'>
            <div className="searchPage_header">
                <Link to="/" >
                    <img className='searchPage__logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage_headerBodey">
                    <Search hideButtons />
                    <div className='searchPage_options'>
                        <div className='searchPage_optionsLeft'>
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionOutlined />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageOutlined />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferOutlined />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomOutlined />
                                <Link to="/map">maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertOutlined />
                                <Link to="/all">more</Link>
                            </div>
                        </div>

                        <div className='searchPage_optionsRight'>
                            <div className="searchPage_option">
                                <Link to="/setting">setting</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tool">tool</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults}results
                        ({data?.searchInformation.formattedSearchTime}seconds) for {term}
                    </p>
                    {data?.items.map((item) => {
                        return (
                            <div className="searchPage_result">
                                <a href={item.link}>
                                    {item.pagemap?.cse_image?.
                                        length > 0 &&
                                        item.pagemap?.cse_image[0]?.src && (
                                            <img src={item.pagemap?.cse_image[0]?.src} alt="" className="searchPage_resultImage" />
                                        )}
                                    {item.displayLink}
                                </a> <br />
                                <a href={item.link} className='searchPage_resultTitle'>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className='searchPage_resultSnippet'>
                                    {item.snippet}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchPage

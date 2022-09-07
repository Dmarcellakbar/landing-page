import React from "react";
import styled from "styled-components";

const SectionSearchBar = styled.section<{
    hasValue: boolean;
}>`
    width: 100%;
    max-width: 100%;
    position: relative;
    margin-right: auto;
    margin-bottom: ${({ hasValue }) => hasValue ? '0px' : '20px'};
    transition: margin 0.3s ease;
`;

const SearchBarContainer = styled.div`
    margin-left: auto;
`

const SearchBarLabel = styled.label`
    position: relative;
    display: grid;
    margin: 0;
`

const SearchBarInput = styled.input`
    font-size: 16px;
    width: 100%;
    margin: 0;
    padding: 10px 20px 10px 50px;
    box-shadow: none;
    color: #000;
    border-radius: 100px;
`

const SearchIcon = styled.div`
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    left: 20px;
    width: 20px;
    height: 20px;
`

interface SearchBarProps {
    searchQuery?: string;
    searchActive?: boolean;
    setSearchHandler: (value: string) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({
    searchQuery,
    searchActive,
    setSearchHandler,
}) => {
    const hasValue = Boolean(searchQuery !== '');
    const classes = `${searchActive ? ' active' : ''}${hasValue ? ' has-value' : ''}`;
    return (
        <>
            <SectionSearchBar
                hasValue={true}
            >
                <SearchBarContainer>
                    <SearchBarLabel htmlFor="search-bar" className={`search${classes}`}>
                        <SearchBarInput
                            onChange={ev => setSearchHandler(ev.target.value)}
                        />
                        <SearchIcon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                style={{
                                    fill: 'primary'
                                }}
                            >
                                <path fillRule="nonzero" d="M13.561 12.52l3.939 3.94a.86.86 0 1 1-1.215 1.215l-4.008-4.008a7.476 7.476 0 1 1 1.285-1.146zm-5.585.874a5.844 5.844 0 1 0 0-11.688 5.844 5.844 0 0 0 0 11.688z" />
                            </svg>
                        </SearchIcon>
                    </SearchBarLabel>
                    
                </SearchBarContainer>
            </SectionSearchBar>
        </>
    )
}


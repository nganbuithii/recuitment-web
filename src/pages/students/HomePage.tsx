import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import Header from '../../components/students/header';
import SearchBar from '../../components/common/SearchBar';
import Footer from '../../components/common/Footer';
import JobCard from '../../components/common/JobCard';
import InfoRegisterForm from '../../components/students/InfoRegisterForm';
import RegisterBusinessform from './RegisterBusinessform';

// Hàm loại bỏ dấu tiếng Việt
const removeVietnameseTones = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

interface Post {
    id: string;
    NamePost: string;
    companyName: string;
    requirements: string;
    companyEmail: string;
    companyPhone: string;
}

const HomePage = () => {
    const [currentSection, setCurrentSection] = useState<"jd" | "register" | "business">("jd");
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [companies, setCompanies] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(''); 

    const handleSectionChange = (section: "jd" | "register" | "business") => {
        setCurrentSection(section);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'posts'));
                const postsList: Post[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Post[];

                setPosts(postsList);
                setFilteredPosts(postsList);

                const companiesList = postsList.map(post => post.companyName).filter((value, index, self) => self.indexOf(value) === index);
                setCompanies(companiesList);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleCompanySelect = (company: string) => {
        if (company) {
            const filtered = posts.filter(post => post.companyName === company);
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(posts);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredResults = filteredPosts.filter(post => {
        const normalizedSearchTerm = removeVietnameseTones(searchTerm.toLowerCase()); 
        const normalizedJobName = removeVietnameseTones(post.NamePost.toLowerCase());  
        return normalizedJobName.includes(normalizedSearchTerm);
    });

    return (
        <div className="max-h-screen-xl flex flex-col bg-white">
            <Header onSelect={handleSectionChange} />
            <div>
                {currentSection === "jd" && (
                    <section className="bg-gray-100">
                        <div className="w-[343px] sm:w-[1290px] sm:h-[1080px] mx-auto">
                            <SearchBar 
                                companies={companies} 
                                onCompanySelect={handleCompanySelect} 
                                searchTerm={searchTerm} 
                                onSearchChange={handleSearchChange} 
                            />

                            <div className="flex justify-center items-center w-full bg-gray-100 my-6">
                                <h1 className="text-black text-center font-roboto text-2xl sm:text-[32px] font-bold leading-[130%] uppercase w-full sm:w-1/2">
                                    TÌM
                                    <span className="text-orange-500"> CÔNG VIỆC MƠ ƯỚC </span>
                                    CỦA BẠN TẠI NGÔI NHÀ MỚI
                                </h1>
                            </div>

                            <div className="flex w-full items-center content-center gap-4 flex-wrap">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((post) => (
                                        <JobCard
                                            key={post.id}
                                            title={post.NamePost}
                                            company={post.companyName || 'Chưa có công ty'}
                                            requirements={post.requirements || 'Chưa có yêu cầu'}
                                            email={post.companyEmail || 'Chưa có email'}
                                            phone={post.companyPhone || 'Chưa có số điện thoại'}
                                        />
                                    ))
                                ) : (
                                    <div className="text-center w-full">Không có công việc nào để hiển thị.</div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {currentSection === "register" && (
                    <div>
                        <InfoRegisterForm />
                    </div>
                )}
                {currentSection === "business" && (
                    <div>
                        <RegisterBusinessform />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

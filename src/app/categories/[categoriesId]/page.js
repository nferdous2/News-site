import { getCategoryNews } from '@/utils/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category);
    console.log(data);
    return (
        <div>
            <h1>Total:<span className='font-bold'>{searchParams.category}</span> news:{""} {data.length}</h1>

            <Grid
                className="mt-5"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {data.slice(0, 4).map((news) => (
                    <Grid key={news.id} item xs={6}>
                        <Link href={`/${news.category}/${news._id}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={news.thumbnail_url}
                                        title="green iguana"
                                    />

                                    <CardContent>
                                        <p className="w-[100px]  bg-red-500  px-2 text-white my-5rounded">
                                            {news.category}
                                        </p>
                                        <Typography gutterBottom>{news.title}</Typography>
                                        <Typography gutterBottom className="my-3">
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default DynamicNewsPage;
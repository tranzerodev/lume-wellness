/**
 *
 * BlogPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Container, ContentContainer } from 'styles/common-styles';
import FeatureBlog from 'components/FeaturedBlog';
import CategoryList from 'components/CategoryList';
import BlogCard from 'components/BlogCard';

import { blogCategories } from '../../constants';
import { loadAllPostsRequest } from './actions';
import saga from './saga';
import reducer from './reducer';
import makeSelectBlogPage from './selectors';

import {
  Wrap,
  Section,
  TitleBlock,
  Title,
  SubTitle,
  List,
  CardWrap,
  Empty,
  ListWrap,
} from './styles';

const BlogPage = ({ postsList = [], loadAllPostsRequest }) => {
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });
  useEffect(() => {
    loadAllPostsRequest();
  }, []);

  const [activeCategory, setActiveCategory] = useState(blogCategories[0]);

  const handleChangeCategory = category => {
    if (category === activeCategory) return;
    setActiveCategory(category);
  };

  const [featureBlog] = postsList.filter(item => !!item.isMainPost) || [];

  const currentPostsList =
    activeCategory !== 'All'
      ? postsList.filter(
          post => post.category.toLowerCase() === activeCategory.toLowerCase(),
        )
      : postsList;

  return (
    <Container bgColor="#e7ddd2">
      <Helmet>
        <title>BlogPage</title>
        <meta name="description" content="Description of BlogPage" />
      </Helmet>

      <ContentContainer>
        <Wrap>
          <MediaQuery query="(max-device-width: 768px)">
            <CategoryList
              categories={blogCategories}
              onChangeCategory={handleChangeCategory}
              activeCategory={activeCategory}
            />
          </MediaQuery>

          <div>
            <Section>
              <TitleBlock>
                <Title>The Well</Title>
              </TitleBlock>
              {featureBlog && <FeatureBlog blog={featureBlog} />}
            </Section>

            <Section>
              <MediaQuery query="(min-device-width: 769px)">
                <CategoryList
                  categories={blogCategories}
                  onChangeCategory={handleChangeCategory}
                  activeCategory={activeCategory}
                />
              </MediaQuery>
            </Section>

            <Section>
              <ListWrap>
                <List>
                  {currentPostsList.length ? (
                    currentPostsList.map(item => (
                      <CardWrap key={item._id}>
                        <BlogCard info={item} />
                      </CardWrap>
                    ))
                  ) : (
                    <Empty>Oops! Empty category!</Empty>
                  )}
                </List>
              </ListWrap>
            </Section>
          </div>
        </Wrap>
      </ContentContainer>
    </Container>
  );
};

BlogPage.propTypes = {
  loadAllPostsRequest: PropTypes.func,
  postsList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = createStructuredSelector({
  postsList: makeSelectBlogPage(),
});

const withConnect = connect(
  mapStateToProps,
  { loadAllPostsRequest },
);

export default compose(
  withConnect,
  memo,
)(BlogPage);

/**
 *
 * BlogPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import BlogCard from 'components/BlogCard';

import { loadAllPostsRequest } from '../BlogPage/actions';
import saga from '../BlogPage/saga';
import reducer from '../BlogPage/reducer';
import makeSelectBlogPage from '../BlogPage/selectors';

import {
  Container,
  PostsList,
  PostListWrap,
  PostText,
  PostBlock,
  Info,
  InfoTitle,
  InfoText,
  PostWrap,
} from './styles';

import TitleBlock from './components/TitleBlock';

const PostPage = ({ postsList = [], match, loadAllPostsRequest }) => {
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });

  useEffect(() => {
    loadAllPostsRequest();
  }, []);

  const postId = match.params.id;

  const [currentPost] = postsList.filter(item => item._id === postId);

  if (!currentPost) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <title>{currentPost.title}</title>
        <meta name="description" content="Description of post" />
      </Helmet>

      <TitleBlock
        title={currentPost.title}
        category={currentPost.category}
        image={currentPost.image}
      />

      <Container>
        <PostWrap>
          <Info>
            <InfoTitle>The need to Know</InfoTitle>
            <InfoText>
               <div dangerouslySetInnerHTML={{ __html: currentPost.need_to_know}}></div>
            </InfoText>
          </Info>
          <PostBlock>
            <PostText
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />
          </PostBlock>
        </PostWrap>

        <PostListWrap>
          <PostsList>
            {postsList.slice(0, 3).map(item => (
              <BlogCard info={item} key={item._id} />
            ))}
          </PostsList>
        </PostListWrap>
      </Container>
    </div>
  );
};

PostPage.propTypes = {};

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
)(PostPage);

const User = require('./User');
const Group = require('./Group');
const Comment = require('./Comment');

User.hasMany(Group, {
  foreignKey: 'group_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment,{
  foreignKey: 'comment_id'
})
  
Group.belongsTo(User, {
  foreignKey: 'user_id'
});

Group.hasMany(Comment,{
  foreignKey:"comment_id"
})

Comment.belongsToMany(Group,{
  through: 'groupComments',
  foreignKey: 'group_id'
})

Comment.belongsTo(User,{
  foreignKey: 'user_id'
})

module.exports = { User, Group, Comment };